// No request form – only passive enhancements (links are now allowed)
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Verify no form elements exist
    const forms = document.querySelectorAll('form, input, textarea, button, select');
    if (forms.length === 0) {
      console.log('✅ No request form or inputs – matches "only displayed message alert"');
    }

    // Decorative live timestamp – reduced size
    const noticeLine = document.querySelector('.notice-line');
    if (noticeLine && !noticeLine.querySelector('.live-timestamp')) {
      const timeSpan = document.createElement('span');
      timeSpan.className = 'live-timestamp';
      timeSpan.style.marginLeft = 'auto';
      timeSpan.style.fontSize = '0.6rem';
      timeSpan.style.background = 'rgba(0,0,0,0.3)';
      timeSpan.style.padding = '2px 6px';
      timeSpan.style.borderRadius = '40px';
      
      function updateTime() {
        const now = new Date();
        timeSpan.textContent = `🕒 ${now.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit', second:'2-digit' })}`;
      }
      updateTime();
      setInterval(updateTime, 1000);
      noticeLine.appendChild(timeSpan);
    }

    console.log('✨ Wallpaper | left logo (image, no border) | alert with clickable link | small footer & timestamp');
  });
})();