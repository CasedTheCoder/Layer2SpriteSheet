// Checking that there is at least one document open
if (documents.length > 0) 
{
    app.preferences.rulerUnits = Units.PIXELS;
	var numberOfColums = Number(prompt("Choose number of resultant Columns","2","Layers to Sprite Sheet"));

    if (numberOfColums > 0) 
    {
        var xWidthPerSprite = activeDocument.width;
        var YWidthPerSprite = activeDocument.height;	
        
        var spriteSheetWidth = xWidthPerSprite * numberOfColums;
        var selectedLayers = activeDocument.artLayers.length; 	
        var spriteSheetHeight = YWidthPerSprite * Math.ceil(selectedLayers/numberOfColums);	

        activeDocument.resizeCanvas(spriteSheetWidth, spriteSheetHeight, AnchorPosition.TOPLEFT);
        
        i = 0;

        do 
        { 
            activeDocument.artLayers[i].visible = true;
            var selectedSprite = Math.floor(i/numberOfColums);
            var YSpritePos = YWidthPerSprite*selectedSprite;	
            var XSpritePos = xWidthPerSprite*(i%numberOfColums);
            activeDocument.artLayers[i].translate(XSpritePos, YSpritePos);

            i++;
        }while(i < selectedLayers);
    }else{
        // Error message
        alert("Error, number of columns must be greater than 0.");
    }
}else{
    // Error message
    alert("Error, at least one document must be opened to launch the script.");
}
 	