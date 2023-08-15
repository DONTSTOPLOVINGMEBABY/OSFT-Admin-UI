function compareStrings(string, projectName) {
    string = string.toLowerCase().trim()
    projectName = projectName.toLowerCase().trim()
    let stringLength = string.length
    let cutString = string.substring(0, stringLength)
    let cutProjectName = projectName.substring(0, stringLength)
    if (cutString === cutProjectName){ return true }
    else { return false }
}

export default compareStrings