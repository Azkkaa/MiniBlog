class Text {
  limitText (text = "", limit = 50)
  {
    return text.length > limit 
    ? text.slice(0, limit) + "..."
    : text;
  }

  ucfirst (text = "")
  {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

export default Text;