
for image in */*jpg
do
 if [ -s $image ] ; then   # non-zero file size
		jhead -cl "Chavoshian.com - Tazhib Traditional Artworks" $image;
		exiftool -XMP-dc:Creator="Shiva Chavoshian" $image;
		exiftool -overwrite_original -rights="©2022 Shiva Chavoshian, all rights reserved (Chavoshian.com)" -CopyrightNotice="©2022 Shiva Chavoshian, all rights reserved (Chavoshian.com)" $image;
		rm "${image}_original";
    echo "ExifData $image Updated.";
  fi
done





# width=$(identify -format %w $image)
# convert -background '#0008' -fill white -gravity center \
# -size ${width}x30 caption:my_caption \
# $image +swap -gravity south -composite new-$image
