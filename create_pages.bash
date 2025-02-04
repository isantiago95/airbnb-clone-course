#!/bin/bash

# Define the target directory
TARGET_DIR="app"

# Check if an argument was provided
if [ -z "$1" ]; then
  echo "Usage: $0 'dir1,dir2,dir3'"
  exit 1
fi

# Convert the comma-separated list into an array
IFS=',' read -ra DIRS <<< "$1"

# Loop through each directory name and create the structure inside app/
for dir in "${DIRS[@]}"; do
  # Capitalize only the first letter of the directory name
  COMPONENT_NAME="$(echo "$dir" | sed 's!/.!\U&!g')Page"

  # Create the directory
  mkdir -p "$TARGET_DIR/$dir"

  # Create the page.tsx file with the correct component name
  cat > "$TARGET_DIR/$dir/page.tsx" <<EOL
function $COMPONENT_NAME() {
  return <div>$COMPONENT_NAME</div>;
}

export default $COMPONENT_NAME;
EOL

  echo "Created $TARGET_DIR/$dir/page.tsx with component $COMPONENT_NAME"
done

echo "All directories and files created successfully inside $TARGET_DIR!"