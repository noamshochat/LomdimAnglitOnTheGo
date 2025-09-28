// Google Analytics utility functions for tracking page views in React SPA

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page view for different sections of the app
export const trackPageView = (pageName: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-EWCLF7QY53', {
      page_title: pageTitle || pageName,
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': pageName
      }
    });
    
    // Send custom event for better tracking
    window.gtag('event', 'page_view', {
      page_title: pageTitle || pageName,
      page_location: window.location.href,
      custom_parameter_1: pageName
    });
  }
};

// Track specific user actions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track exam completion
export const trackExamCompletion = (examType: string, score: number, totalQuestions: number, percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exam_completed', {
      event_category: 'Exam',
      event_label: examType,
      value: percentage,
      custom_parameter_1: examType,
      custom_parameter_2: score.toString(),
      custom_parameter_3: totalQuestions.toString()
    });
  }
};

// Track word practice
export const trackWordPractice = (category: string, wordCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'word_practice', {
      event_category: 'Learning',
      event_label: category,
      value: wordCount
    });
  }
};
