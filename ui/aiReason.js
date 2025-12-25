export const AI_REASONS = {
  NOISE_BLOCK: 'Cầu nhiễu – Checker chặn',
  TRANSITION_WAIT: 'Cầu gãy – chờ',
  UNKNOWN: 'Chưa đủ dữ liệu',
  STABLE_TREND: 'Cầu ổn định – Trend',
  STABLE_PATTERN: 'Cầu ổn định – Pattern',
  TRANSITION_MIRROR: 'Bắt đảo – Mirror'
};

export function renderAIReason(decision){
  document.getElementById('aiReason').textContent =
    AI_REASONS[decision.reasonCode] || '';
}
