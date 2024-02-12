const ATTACK_VALUE = 10;
let chosenMaxLife = 50;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
let currentmonsterHealth = chosenMaxLife;

let CurrentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackMonster(){
    
}



function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentmonsterHealth -= damage;
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    CurrentPlayerHealth -= playerdamage;
    if (currentmonsterHealth <= 0) {
        alert('You won!');
    } else if (CurrentPlayerHealth <= 0) {
        alert('You Lost!');
    }
}



function strongAttackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentmonsterHealth -= damage;
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    CurrentPlayerHealth -= playerdamage;
    if (currentmonsterHealth <= 0) {
        alert('You won!');
    } else if (CurrentPlayerHealth <= 0) {
        alert('You Lost!');
    }
}
attackBtn.addEventListener('click', attackHandler);

strongAttackBtn.addEventListener('click', strongAttackHandler);