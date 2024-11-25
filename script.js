function showForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab = document.querySelector('.tab-btn:nth-child(1)');
    const signupTab = document.querySelector('.tab-btn:nth-child(2)');
  
    if (formType === 'login') {
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
    } else {
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
    }
  }
  
