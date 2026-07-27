#!/bin/sh
set -eu

project_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
base_url=${CSBHI_BASE_URL:-http://127.0.0.1:8081}
chrome=${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}
encoder=${CWEBP:-cwebp}
capture_dir=$(mktemp -d "${TMPDIR:-/tmp}/csbhi-figures.XXXXXX")

cleanup() {
  rm -rf -- "$capture_dir"
}
trap cleanup EXIT HUP INT TERM

if ! curl -fsS "$base_url/leap-of-faith.html" >/dev/null; then
  echo "Start the CSBHI server at $base_url before capturing figures." >&2
  exit 1
fi

for theme in light dark; do
  for figure in 1 2 3 4 5 6; do
    source_image="$capture_dir/Fig$figure-$theme.png"
    chrome_log="$capture_dir/Fig$figure-$theme.log"
    if [ "$theme" = light ]; then
      destination="$project_root/images/Fig$figure.webp"
    else
      destination="$project_root/images/Fig$figure-dark.webp"
    fi

    printf 'Capturing Fig%s (%s)…\n' "$figure" "$theme"
    if ! "$chrome" \
      --headless=new \
      --hide-scrollbars \
      --force-device-scale-factor=1 \
      --run-all-compositor-stages-before-draw \
      --virtual-time-budget=2000 \
      --window-size=1440,768 \
      --screenshot="$source_image" \
      "$base_url/leap-of-faith.html?figure=$figure&theme=$theme" \
      >"$chrome_log" 2>&1
    then
      echo "Chrome failed while capturing Fig$figure ($theme):" >&2
      cat "$chrome_log" >&2
      exit 1
    fi

    "$encoder" -quiet -q 92 "$source_image" -o "$destination"
  done
done

echo "Captured light and dark figures 1–6 in $project_root/images"
