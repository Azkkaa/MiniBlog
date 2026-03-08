class Text {

  /**
   * 
   * @param {string} text 
   * @param {number} limit 
   * @returns {string}
   */
  limitText (text = "", limit = 50)
  {
    return text.length > limit 
    ? text.slice(0, limit) + "..."
    : text;
  }

  /**
   * 
   * @param {string} text 
   * @returns {string}
   */
  ucfirst (text = "")
  {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

export default Text;