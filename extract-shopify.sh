#!/bin/bash

echo "🔍 Looking for Shopify package file..."

# Check for the file
if [ -f "1MarketLive_Shopify_Complete_Package.tar.gz" ]; then
    echo "✅ Found: 1MarketLive_Shopify_Complete_Package.tar.gz"
    
    # Create extraction directory
    mkdir -p shopify-extracted
    
    # Extract the tar.gz file
    echo "📦 Extracting Shopify package..."
    tar -xzf 1MarketLive_Shopify_Complete_Package.tar.gz -C shopify-extracted/
    
    echo "✅ Extraction complete!"
    echo "📁 Contents:"
    ls -la shopify-extracted/
    
elif [ -f "*.zip" ]; then
    echo "Found ZIP file, extracting..."
    unzip *.zip -d shopify-extracted/
    
else
    echo "❌ Shopify package file not found in workspace"
    echo "📂 Current files:"
    ls -la *.tar.gz *.zip 2>/dev/null || echo "No compressed files found"
    echo ""
    echo "Please copy your file to this workspace first:"
    echo "1. Drag & drop from Downloads folder"
    echo "2. Or use File > Open and select the file"
fi