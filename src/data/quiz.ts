// Quiz tạo vốn — 3 độ khó. Càng khó: đúng thưởng càng cao NHƯNG sai an ủi càng ít
// (mạo hiểm cao/đền bù thấp). Dễ thì ngược lại: thưởng thấp nhưng sai vẫn được nhiều.
export const difficulties = [
  { id: 'easy', label: 'Dễ', reward: 4, failReward: 3, time: 15, color: '#22c55e' },
  { id: 'medium', label: 'Vừa', reward: 8, failReward: 2, time: 15, color: '#f59e0b' },
  { id: 'hard', label: 'Khó', reward: 14, failReward: 1, time: 15, color: '#ef4444' },
]

export const quizQuestions = {
  easy: [
    {
      q: 'Thị phần (Market Share) được tính như thế nào?',
      options: [
        'Tiền mặt / Tổng tài sản',
        'Số cp sở hữu / Tổng số cp công ty',
        'Giá cp / Giá trị công ty',
        'Số buff / Tổng số buff',
      ],
      answer: 1,
    },
  ],
  medium: [
    {
      q: 'Sở hữu bao nhiêu cổ phần thì được coi là độc quyền (Monopoly)?',
      options: ['≥ 30%', '≥ 40%', '≥ 50%', '≥ 70%'],
      answer: 2,
    },
  ],
  hard: [
    {
      q: 'Round 3, team A có 100B tài sản, thuế suất 9%. Số thuế phải nộp?',
      options: ['3B', '9B', '11B', '13B'],
      answer: 1,
    },
  ],
}
