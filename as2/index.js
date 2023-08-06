function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {

  const regex = new RegExp(plainText, 'g');
  
  plainTextPositions.forEach((position) => {
    const textToHighlight = plainText.slice(position.start, position.end);
    const highlightedText = `<mark>${textToHighlight}</mark>`;
    
    htmlContent = htmlContent.replace(regex, highlightedText);
  });
  
  return htmlContent;
}