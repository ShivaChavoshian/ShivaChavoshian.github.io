
for image in */*jpg
do
 if [ -s $image ] ; then   # non-zero file size
		jhead -cl "Chavoshian.com - Tazhib Traditional Artworks" $image;
		exiftool -XMP-dc:Creator="Shiva Chavoshian" $image;
		exiftool -overwrite_original -rights="©2022 Shiva Chavoshian, all rights reserved" -CopyrightNotice="©2022 Shiva Chavoshian, all rights reserved" $image;
		rm "${image}_original";
    echo "ExifData $image Updated.";

		SIZE0=$(wc -c < "$image");
		DIMENSION=$(identify -format '%wx%h' "$image");

		echo "Otimizing $image";
		echo "File size: $(( $SIZE0 / 1000 ))" ;

		# More: https://developers.google.com/speed/docs/insights/OptimizeImages
		# Mpre: https://stackoverflow.com/questions/53777917/download-optimized-images-from-pagespeed-insights
		# convert INPUT.jpg -sampling-factor 4:2:0 -strip [-resize WxH] [-quality N] [-interlace JPEG] [-colorspace Gray/sRGB] OUTPUT.jpg
		convert $image -sampling-factor 4:2:0 -strip -quality 80 -interlace JPEG -colorspace sRGB $image;


		SIZE1=$(wc -c < "$image");
		echo "File size optimized: $(( $SIZE1 / 1000 ))" ;

  fi
done





# width=$(identify -format %w $image)
# convert -background '#0008' -fill white -gravity center \
# -size ${width}x30 caption:my_caption \
# $image +swap -gravity south -composite new-$image
