document.addEventListener('DOMContentLoaded', function () {
    const hue = document.getElementById('hue')
    const saturate = document.getElementById('saturation')
    const light = document.getElementById('lightness')
    const hueValue = document.getElementById('hue-value')
    const saturateValue = document.getElementById('saturation-value')
    const lightValue = document.getElementById('lightness-value')
    const colourDisplay = document.querySelector('.colour-display')
    const copyBtn = document.getElementById('copy-btn')
    
    
    
    hue.addEventListener('input', updateColour)
    saturate.addEventListener('input', updateColour)
    light.addEventListener('input', updateColour)

    updateColour()

    function updateColour() {
        const hueUpdate = hue.value
        const saturateUpdate = saturate.value
        const lightUpdate = light.value
        const colour = `hsl(${hueUpdate}%, ${saturateUpdate}%, ${lightUpdate}%)`
        colourDisplay.style.backgroundColor = colour
        hueValue.textContent = hueUpdate
        saturateValue.textContent = saturateUpdate
        lightValue.textContent = lightUpdate
    }
    
    const copyToClipboard = () => {
        const textToCopy = `hsl(${hue}%, ${saturate}%, ${light}%)`
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Copied to Clipboard'))
            .catch((err) => console.err('Unable to copy', err))
    }

    copyBtn.addEventListener('click', copyToClipboard)

    
})