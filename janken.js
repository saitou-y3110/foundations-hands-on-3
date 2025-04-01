function play(playerChoice) {
    const choices = ['グー', 'チョキ', 'パー'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = '引き分けです！';
    } else if (
        (playerChoice === 'グー' && computerChoice === 'チョキ') ||
        (playerChoice === 'チョキ' && computerChoice === 'パー') ||
        (playerChoice === 'パー' && computerChoice === 'グー')
    ) {
        result = 'あなたの勝ちです！';
    } else {
        result = 'あなたの負けです！';
    }

    document.getElementById('result').textContent = 
        `あなた: ${playerChoice}, コンピュータ: ${computerChoice} - ${result}`;
}