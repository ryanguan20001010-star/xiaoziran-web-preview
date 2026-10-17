#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets
download() {
  local url="$1"; local dest="$2"; local tmp="${dest}.part"
  echo "Downloading: ${dest}"
  curl -fL --retry 2 --connect-timeout 15 "$url" -o "$tmp"
  test -s "$tmp"
  if ! file "$tmp" | grep -Eqi 'JPEG|image data'; then echo "ERROR: not a recognized image: $tmp" >&2; rm -f "$tmp"; exit 1; fi
  mv "$tmp" "$dest"
  echo "OK: $dest ($(wc -c < "$dest") bytes)"
}
download 'https://images.unsplash.com/photo-1773303460745-c87f0f0402f8?auto=format&fit=crop&w=1800&q=80' 'assets/reference_meadow.jpg'
download 'https://images.unsplash.com/photo-1738597967163-4ea24911eb21?auto=format&fit=crop&w=1400&q=78' 'assets/reference_forest_path.jpg'
download 'https://images.unsplash.com/photo-1770720135572-80c48b092079?auto=format&fit=crop&w=1400&q=78' 'assets/reference_moss_path.jpg'
echo "Done. Open index.html in Safari or Chrome."
