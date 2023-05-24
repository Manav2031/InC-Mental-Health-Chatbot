const { execSync } = require('child_process');

exports.callEmotionDetection=(text)=> {
    const command = `python alertController.py "${text}"`;
    const result = execSync(command);
    return parseInt(result.toString().trim());
  }
  
  // Example usage:
  
