// Remove a post from your instagram feed using xpaths
function removePostByUsername(username) {
    base_xpath = "//a[@href='/"+username+"/']/ancestor::article"
    children = $x(base_xpath)
    parents = $x(base_xpath + "/..")

    parent_ = parents[0]
    child_ = children[0]
    // if parents[0] === undefined, there's no match, so return false
    if(parent_ === undefined || child_ === undefined) {
        return false
    }
    parents[0].removeChild(children[0])
    return true
}
