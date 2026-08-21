const textInput = document.getElementById('text-input');
const rateInput = document.getElementById('rate-input');
const btnSpeak = document.getElementById('btn-speak');
const btnStop = document.getElementById('btn-stop');

// Check support
if (!('speechSynthesis' in window)) {
    alert('សូមអភ័យទោស Browser របស់អ្នកមិនគាំទ្រមុខងារបញ្ចេញសំឡេងនេះទេ។ (Speech Synthesis not supported)');
}

btnSpeak.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to set Khmer language (some OS support km-KH)
    utterance.lang = 'km-KH'; 
    utterance.rate = parseFloat(rateInput.value);
    
    window.speechSynthesis.speak(utterance);
});

btnStop.addEventListener('click', () => {
    window.speechSynthesis.cancel();
});
