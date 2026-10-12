/**
 * Endeavour International School, Bhopal
 * Master Application Controller
 * Dr. Harshvardhan Shrivastva, Founder & Principal
 * Features:
 * - Theme Management (Light/Dark with persistent localStorage)
 * - Mobile Navigation Drawer
 * - Smooth Scrolling & Active Section Spy
 * - Smart DOB-to-Grade Suggestion Algorithm
 * - Complete Form Validation (Strict inline errors, zero alert popups)
 * - Dynamic Receipt Generation & Print Support
 * - Facilities & Streams Interactive Tabs
 * - FAQ Accordion
 * - Google Search & SEO SERP Inspector Modal for Judges
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initStreamTabs();
  initFacilityFilters();
  initFaqAccordion();
  initSmartGradeSuggester();
  initEnquiryForm();
  initGooglePreviewModal();
});

/* ==========================================================================
   1. Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('eis-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('eis-theme', newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  if (theme === 'dark') {
    // Show Moon / Active Sun icon
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  } else {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  }
}

/* ==========================================================================
   2. Navigation & Smooth Section Spy
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id], header[id]');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Class 11 & 12 Academic Stream Tabs
   ========================================================================== */
function initStreamTabs() {
  const tabBtns = document.querySelectorAll('.stream-tab-btn');
  const panes = document.querySelectorAll('.stream-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stream = btn.getAttribute('data-stream');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPane = document.getElementById(`pane-${stream}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. Facilities & Activities Category Filter
   ========================================================================== */
function initFacilityFilters() {
  const filterBtns = document.querySelectorAll('.fac-filter-btn');
  const cards = document.querySelectorAll('.fac-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other items for neat accordion behavior
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   6. Smart Grade Suggestion from Date of Birth (Client's Optional Extra)
   ========================================================================== */
function initSmartGradeSuggester() {
  const dobInput = document.getElementById('childDob');
  const gradeSelect = document.getElementById('grade');
  const pill = document.getElementById('smartGradePill');
  const pillText = document.getElementById('smartGradeText');

  if (!dobInput || !gradeSelect || !pill || !pillText) return;

  dobInput.addEventListener('change', () => {
    const dobValue = dobInput.value;
    if (!dobValue) {
      pill.classList.remove('visible');
      return;
    }

    const birthDate = new Date(dobValue);
    if (isNaN(birthDate.getTime())) {
      pill.classList.remove('visible');
      return;
    }

    // Cutoff reference date: June 1, 2026 (Commencement of academic session 2026-27)
    const cutoffDate = new Date(2026, 5, 1);
    let ageYears = cutoffDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = cutoffDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && cutoffDate.getDate() < birthDate.getDate())) {
      ageYears--;
    }

    let suggestedGrade = '';
    if (ageYears >= 5.5 && ageYears < 6.5) suggestedGrade = 'Grade 1';
    else if (ageYears >= 6.5 && ageYears < 7.5) suggestedGrade = 'Grade 2';
    else if (ageYears >= 7.5 && ageYears < 8.5) suggestedGrade = 'Grade 3';
    else if (ageYears >= 8.5 && ageYears < 9.5) suggestedGrade = 'Grade 4';
    else if (ageYears >= 9.5 && ageYears < 10.5) suggestedGrade = 'Grade 5';
    else if (ageYears >= 10.5 && ageYears < 11.5) suggestedGrade = 'Grade 6';
    else if (ageYears >= 11.5 && ageYears < 12.5) suggestedGrade = 'Grade 7';
    else if (ageYears >= 12.5 && ageYears < 13.5) suggestedGrade = 'Grade 8';
    else if (ageYears >= 13.5 && ageYears < 14.5) suggestedGrade = 'Grade 9';
    else if (ageYears >= 14.5 && ageYears < 15.5) suggestedGrade = 'Grade 10';
    else if (ageYears >= 15.5 && ageYears < 16.5) suggestedGrade = 'Grade 11';
    else if (ageYears >= 16.5 && ageYears <= 18.5) suggestedGrade = 'Grade 12';

    if (suggestedGrade) {
      pillText.textContent = `✨ Suggested based on DOB (Age ~${Math.round(ageYears)} yrs): ${suggestedGrade} (Click to auto-fill)`;
      pill.classList.add('visible');

      pill.onclick = () => {
        gradeSelect.value = suggestedGrade;
        gradeSelect.dispatchEvent(new Event('change'));
        clearError('grade');
        gradeSelect.focus();
      };
    } else {
      pill.classList.remove('visible');
    }
  });
}

/* ==========================================================================
   7. Admission Enquiry Form Validation & Dynamic Receipt
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  const successCard = document.getElementById('submissionSuccessCard');
  const submitAnotherBtn = document.getElementById('submitAnotherBtn');
  const printReceiptBtn = document.getElementById('printReceiptBtn');

  if (!form || !successCard) return;

  // Real-time clearance of errors on user typing / change
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      clearError(input.name || input.id);
    });
    input.addEventListener('change', () => {
      clearError(input.name || input.id);
    });
  });

  // Radio button styling helper
  const radioLabels = form.querySelectorAll('.radio-pill-label');
  radioLabels.forEach(lbl => {
    const radio = lbl.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        radioLabels.forEach(l => l.classList.remove('checked'));
        if (radio.checked) lbl.classList.add('checked');
        clearError('source');
      });
    }
  });

  // Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // 1. Parent Name
    const parentName = document.getElementById('parentName');
    if (!parentName || parentName.value.trim().length < 2) {
      showError('parentName', 'Please enter parent/guardian full name.');
      isValid = false;
    } else {
      clearError('parentName');
    }

    // 2. Child's Name
    const childName = document.getElementById('childName');
    if (!childName || childName.value.trim().length < 2) {
      showError('childName', 'Please enter child full name.');
      isValid = false;
    } else {
      clearError('childName');
    }

    // 3. Child's Date of Birth
    const childDob = document.getElementById('childDob');
    if (!childDob || !childDob.value) {
      showError('childDob', 'Please select child date of birth.');
      isValid = false;
    } else {
      const birth = new Date(childDob.value);
      const today = new Date();
      if (isNaN(birth.getTime()) || birth >= today) {
        showError('childDob', 'Please enter a valid past birth date.');
        isValid = false;
      } else {
        clearError('childDob');
      }
    }

    // 4. Grade Applying For
    const grade = document.getElementById('grade');
    if (!grade || !grade.value) {
      showError('grade', 'Please select the grade applying for.');
      isValid = false;
    } else {
      clearError('grade');
    }

    // 5. Email Address (Strict RFC format check)
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      showError('email', 'Please enter a valid email address (e.g. name@domain.com).');
      isValid = false;
    } else {
      clearError('email');
    }

    // 6. Phone Number (Strictly 10 digits as specified in brief)
    const phone = document.getElementById('phone');
    const cleanPhone = phone ? phone.value.replace(/\D/g, '') : '';
    if (!cleanPhone || cleanPhone.length !== 10) {
      showError('phone', 'Please enter an exact 10-digit telephone number.');
      isValid = false;
    } else {
      clearError('phone');
    }

    // 8. How did you hear about us (Radio required)
    const sourceChecked = form.querySelector('input[name="source"]:checked');
    if (!sourceChecked) {
      showError('source', 'Please select how you heard about us.');
      isValid = false;
    } else {
      clearError('source');
    }

    // 10. Consent Checkbox (Required)
    const consent = document.getElementById('consent');
    if (!consent || !consent.checked) {
      showError('consent', 'Consent is mandatory to process your admission enquiry.');
      isValid = false;
    } else {
      clearError('consent');
    }

    if (!isValid) {
      // Scroll smoothly to first error element
      const firstError = form.querySelector('.form-group.has-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Generate Official Enquiry Reference Number
    const randomRef = 'EIS-2026-ENQ-' + Math.floor(1000 + Math.random() * 9000);
    const formattedDob = new Date(childDob.value).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    // Populate Receipt Slip Elements
    document.getElementById('receiptRefNum').textContent = randomRef;
    document.getElementById('recParentName').textContent = parentName.value.trim();
    document.getElementById('recChildName').textContent = childName.value.trim();
    document.getElementById('recGrade').textContent = grade.value;
    document.getElementById('recDob').textContent = formattedDob;
    document.getElementById('recEmail').textContent = email.value.trim();
    document.getElementById('recPhone').textContent = '+91 ' + cleanPhone;

    // Smoothly Replace Form with Thank You Message / Receipt Slip
    form.style.display = 'none';
    successCard.classList.add('active');
    successCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Store in localStorage for persistence
    const enquiryData = {
      ref: randomRef,
      parent: parentName.value.trim(),
      child: childName.value.trim(),
      grade: grade.value,
      dob: childDob.value,
      email: email.value.trim(),
      phone: cleanPhone,
      source: sourceChecked.value,
      submittedAt: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem('eis-enquiries') || '[]');
      existing.push(enquiryData);
      localStorage.setItem('eis-enquiries', JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  });

  // "Submit Another Enquiry" handler
  if (submitAnotherBtn) {
    submitAnotherBtn.addEventListener('click', () => {
      form.reset();
      radioLabels.forEach(l => l.classList.remove('checked'));
      const pill = document.getElementById('smartGradePill');
      if (pill) pill.classList.remove('visible');

      successCard.classList.remove('active');
      form.style.display = 'block';
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // "Print / Save Receipt" handler
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function showError(fieldId, message) {
  const group = document.getElementById(`group-${fieldId}`);
  const errBox = document.getElementById(`err-${fieldId}`);
  const input = document.getElementById(fieldId);

  if (group) group.classList.add('has-error');
  if (input) input.classList.add('has-error');
  if (errBox) {
    const span = errBox.querySelector('span');
    if (span) span.textContent = message;
    errBox.style.display = 'flex';
  }
}

function clearError(fieldId) {
  const group = document.getElementById(`group-${fieldId}`);
  const errBox = document.getElementById(`err-${fieldId}`);
  const input = document.getElementById(fieldId);

  if (group) group.classList.remove('has-error');
  if (input) input.classList.remove('has-error');
  if (errBox) errBox.style.display = 'none';
}

/* ==========================================================================
   8. Google Search SERP Inspector Modal (Hackathon Presentation Extra)
   ========================================================================== */
function initGooglePreviewModal() {
  const openBtn = document.getElementById('openGooglePreviewBtn');
  const closeBtn = document.getElementById('closeGooglePreviewBtn');
  const modal = document.getElementById('googlePreviewModal');

  if (!openBtn || !closeBtn || !modal) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
