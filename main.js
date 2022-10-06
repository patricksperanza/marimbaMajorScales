
//Event Listeners for Scale Buttons
document.querySelector('#c').addEventListener('click', cMajor)
document.querySelector('#dFlat').addEventListener('click', dFlatMajor)
document.querySelector('#d').addEventListener('click', dMajor)
document.querySelector('#eFlat').addEventListener('click', eFlatMajor)
document.querySelector('#e').addEventListener('click', eMajor)
document.querySelector('#f').addEventListener('click', fMajor)
document.querySelector('#gFlat').addEventListener('click', gFlatMajor)
document.querySelector('#g').addEventListener('click', gMajor)
document.querySelector('#aFlat').addEventListener('click', aFlatMajor)
document.querySelector('#a').addEventListener('click', aMajor)
document.querySelector('#bFlat').addEventListener('click', bFlatMajor)
document.querySelector('#b').addEventListener('click', bMajor)

// Clear Previous Text
function clearPrevious(){
    const marimbaBars = document.querySelectorAll('.marimbaBar')
    marimbaBars.forEach(bar => bar.innerText = '')
}

// Audio 
let c4aud = new Audio('audio/C4 - R.mp3')
let d4aud = new Audio('audio/D4 - R.mp3')


// Scale Functions
function cMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "C Major"

    // Clear Previous Text
    clearPrevious()

    //Notes
    document.querySelector('#c4').innerText = "C"
    document.querySelector('#d4').innerText = "D"
    document.querySelector('#e4').innerText = "E"
    document.querySelector('#f4').innerText = "F"
    document.querySelector('#g4').innerText = "G"
    document.querySelector('#a4').innerText = "A"
    document.querySelector('#b4').innerText = "B"
    document.querySelector('#c5').innerText = "C"

    // Image
    document.getElementById('scaleImage').src = 'images/cMajorScaleImage.png'
}

function dFlatMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "D♭ Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('c#4').innerText = "D♭"
    document.getElementById('d#4').innerText = "E♭"
    document.getElementById('f4').innerText = "F"
    document.getElementById('f#4').innerText = "G♭"
    document.getElementById('g#4').innerText = "A♭"
    document.getElementById('a#4').innerText = "B♭"
    document.getElementById('c5').innerText = "C"
    document.getElementById('c#5').innerText = "D♭"
    
    // Image
    document.getElementById('scaleImage').src = 'images/dFlatMajorScaleImage.png'
}


function dMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "D Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('d4').innerText = "D"
    document.getElementById('e4').innerText = "E"
    document.getElementById('f#4').innerText = "F♯"
    document.getElementById('g4').innerText = "G"
    document.getElementById('a4').innerText = "A"
    document.getElementById('b4').innerText = "B"
    document.getElementById('c#5').innerText = "C♯"
    document.getElementById('d5').innerText = "D"

    // Image
    document.getElementById('scaleImage').src = 'images/dMajorScaleImage.png'
}

function eFlatMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "E♭ Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('d#4').innerText = "E♭"
    document.getElementById('f4').innerText = "F"
    document.getElementById('g4').innerText = "G"
    document.getElementById('g#4').innerText = "A♭"
    document.getElementById('a#4').innerText = "B♭"
    document.getElementById('c5').innerText = "C"
    document.getElementById('d5').innerText = "D"
    document.getElementById('d#5').innerText = "E♭"

    // Image
    document.getElementById('scaleImage').src = 'images/eFlatMajorScaleImage.png'
}


function eMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "E Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('e4').innerText = "E"
    document.getElementById('f#4').innerText = "F#"
    document.getElementById('g#4').innerText = "G#"
    document.getElementById('a4').innerText = "A"
    document.getElementById('b4').innerText = "B"
    document.getElementById('c#5').innerText = "C#"
    document.getElementById('d#5').innerText = "D#"
    document.getElementById('e5').innerText = "E"

    // Image
    document.getElementById('scaleImage').src = 'images/eMajorScaleImage.png'
}

function fMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "F Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('f4').innerText = "F"
    document.getElementById('g4').innerText = "G"
    document.getElementById('a4').innerText = "A"
    document.getElementById('a#4').innerText = "B♭"
    document.getElementById('c5').innerText = "C"
    document.getElementById('d5').innerText = "D"
    document.getElementById('e5').innerText = "E"
    document.getElementById('f5').innerText = "F"

    // Image
    document.getElementById('scaleImage').src = 'images/fMajorScaleImage.png'
}

function gFlatMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "G♭ Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('f#4').innerText = "G♭"
    document.getElementById('g#4').innerText = "A♭"
    document.getElementById('a#4').innerText = "B♭"
    document.getElementById('b4').innerText = "C♭"
    document.getElementById('c#5').innerText = "D♭"
    document.getElementById('d#5').innerText = "E♭"
    document.getElementById('f5').innerText = "F"
    document.getElementById('f#5').innerText = "G♭"

    // Image
    document.getElementById('scaleImage').src = 'images/gFlatMajorScaleImage.png'
}

function gMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "G Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('g4').innerText = "G"
    document.getElementById('a4').innerText = "A"
    document.getElementById('b4').innerText = "B"
    document.getElementById('c5').innerText = "C"
    document.getElementById('d5').innerText = "D"
    document.getElementById('e5').innerText = "E"
    document.getElementById('f#5').innerText = "F♯"
    document.getElementById('g5').innerText = "G"

    // Image
    document.getElementById('scaleImage').src = 'images/gMajorScaleImage.png'
}

function aFlatMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "A♭ Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('g#4').innerText = "A♭"
    document.getElementById('a#4').innerText = "B♭"
    document.getElementById('c5').innerText = "C"
    document.getElementById('c#5').innerText = "D♭"
    document.getElementById('d#5').innerText = "E♭"
    document.getElementById('f5').innerText = "F"
    document.getElementById('g5').innerText = "G"
    document.getElementById('g#5').innerText = "A♭"

    // Image
    document.getElementById('scaleImage').src = 'images/aFlatMajorScaleImage.png'
}

function aMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "A Major"

    // Clear Previous Text♯
    clearPrevious()

    // Notes
    document.getElementById('a4').innerText = "A"
    document.getElementById('b4').innerText = "B"
    document.getElementById('c#5').innerText = "C♯"
    document.getElementById('d5').innerText = "D"
    document.getElementById('e5').innerText = "E"
    document.getElementById('f#5').innerText = "F♯"
    document.getElementById('g#5').innerText = "G♯"
    document.getElementById('a5').innerText = "A"

    // Image
    document.getElementById('scaleImage').src = 'images/aMajorScaleImage.png'
}

function bFlatMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "B♭ Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('a#4').innerText = "B♭"
    document.getElementById('c5').innerText = "C"
    document.getElementById('d5').innerText = "D"
    document.getElementById('d#5').innerText = "E♭"
    document.getElementById('f5').innerText = "F"
    document.getElementById('g5').innerText = "G"
    document.getElementById('a5').innerText = "A"
    document.getElementById('a#5').innerText = "B♭"

    // Image
    document.getElementById('scaleImage').src = 'images/bFlatMajorScaleImage.png'
}

function bMajor(){
    // Selected Scale
    document.querySelector('#currentlySelected').innerText = "B Major"

    // Clear Previous Text
    clearPrevious()

    // Notes
    document.getElementById('b4').innerText = "B"
    document.getElementById('c#5').innerText = "C♯"
    document.getElementById('d#5').innerText = "D♯"
    document.getElementById('e5').innerText = "E"
    document.getElementById('f#5').innerText = "F♯"
    document.getElementById('g#5').innerText = "G♯"
    document.getElementById('a#5').innerText = "A♯"
    document.getElementById('b5').innerText = "B"

    // Image
    document.getElementById('scaleImage').src = 'images/bMajorScaleImage.png'
}