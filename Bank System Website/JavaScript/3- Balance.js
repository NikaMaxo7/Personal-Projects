// document.addEventListener('DOMContentLoaded', () => {
//     const balanceEl = document.getElementById('balance-value');
//     const tbody = document.querySelector('#transactions tbody');
//     const updatedEl = document.getElementById('last-updated');

//     // ნიმუშადი მონაცემები
//     const data = [
//         {date: '2025-08-01', desc: 'Salary', amount: '+1500.00'},
//         {date: '2025-08-05', desc: 'Groceries', amount: '-120.50'},
//         {date: '2025-08-12', desc: 'Transfer', amount: '+200.00'},
//         {date: '2025-08-20', desc: 'Utilities', amount: '-80.75'},
//         {date: '2025-08-22', desc: 'Coffee', amount: '-3.50'}
//     ];

//     // ბალანსის გამოთვლა (ნიმუში)
//     const balance = data.reduce((sum, item) => {
//         const n = parseFloat(item.amount.replace(/[+,]/g, ''));
//         return item.amount.startsWith('-') ? sum - Math.abs(n) : sum + n;
//     }, 0);
//     balanceEl.textContent = (balance >= 0 ? '₾' : '-₾') + Math.abs(balance).toFixed(2);

//     // ცხრილის შევსება
//     data.forEach(row => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `<td>${row.date}</td><td>${row.desc}</td><td class="${row.amount.startsWith('-') ? 'debit' : 'credit'}">${row.amount}</td>`;
//         tbody.appendChild(tr);
//     });

//     // Last updated
//     const now = new Date();
//     updatedEl.textContent = 'Last updated: ' + now.toLocaleString();
// });