class Text {
  limitText (text = "", limit = 50)
  {
    return text.length > limit 
    ? text.slice(0, limit) + "..."
    : text;
  }
}

export default Text;