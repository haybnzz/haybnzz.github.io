/* Initial hidden state for each letter */
#animated-text span {
    opacity: 0;
    animation: fadeInAnimation 1s forwards; /* Animation duration and fill mode */
    animation-delay: calc(var(--delay) * 0.1s); /* Delay for each letter */
  }
  
  /* Keyframes for fading in each letter */
  @keyframes fadeInAnimation {
    to {
      opacity: 1;
    }
  }