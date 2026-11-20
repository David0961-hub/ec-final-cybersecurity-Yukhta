import { useState } from 'react';

function evaluatePassword(pwd) {
  let score = 0;
  const tips = [];

  if (pwd.length >= 8) {
    score += 1;
  } else {
    tips.push('Сделайте пароль длиной не менее 8 символов');
  }

  if (/\d/.test(pwd)) {
    score += 1;
  } else {
    tips.push('Добавьте хотя бы одну цифру');
  }

  if (/[A-ZА-ЯЁ]/.test(pwd)) {
    score += 1;
  } else {
    tips.push('Добавьте хотя бы одну заглавную букву');
  }

  if (/[^a-zA-Zа-яА-ЯёЁ0-9\s]/.test(pwd)) {
    score += 1;
  } else {
    tips.push('Добавьте спецсимвол (например, !, @, #, $)');
  }

  const labels = ['Очень слабый', 'Слабый', 'Средний', 'Хороший', 'Надёжный'];
  const colors = ['#dc2626', '#ea580c', '#eab308', '#22c55e', '#16a34a'];

  return {
    score,
    percent: (score / 4) * 100,
    label: labels[score],
    color: colors[score],
    tips,
  };
}

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const result = evaluatePassword(password);

  return (
    <section className="card">
      <h3>🔐 Проверка надёжности пароля</h3>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Введите пароль для проверки..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Скрыть' : 'Показать'}
        </button>
      </div>

      {password.length > 0 && (
        <div style={{ marginTop: '12px' }}>
          <div style={{ background: '#e5e7eb', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${result.percent}%`,
                background: result.color,
                height: '100%',
                transition: 'width 0.2s, background 0.2s',
              }}
            />
          </div>

          <p style={{ marginTop: '6px', fontWeight: 'bold', color: result.color }}>
            Надёжность: {result.label} ({result.score}/4)
          </p>

          {result.tips.length > 0 && (
            <ul style={{ marginTop: '6px', paddingLeft: '18px' }}>
              {result.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}