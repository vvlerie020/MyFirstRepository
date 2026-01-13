class Hero {
    constructor(n) {
        this.name = n;
        this.health = 100;
    }
}
// setWeapon(w) {
//     this.weapon = weapons[w];
//     this.weaponName = weapon;
   
// }
// 
        // if (Math.random() < this.weapon.hitChance) {
        //     const damage = Math.floor(Math.random() * 
        //     (this.weapon.maxDamage - this.weapon.minDamage + 1)) 
        //     + this.weapon.minDamage;
         
    //     } else {
    //         log(`${this.name} missed the attack with their 
    //             ${this.weaponName}!`);
    //     }
   
   

    const weapons = {
    air: { minDamage: 15, maxDamage: 40, hitChance: 0.7 },
    water: { minDamage: 10, maxDamage: 50, hitChance: 0.6 },
    fire: { minDamage: 20, maxDamage: 35, hitChance: 0.8 },
    earth: { minDamage: 25, maxDamage: 30, hitChance: 0.9 }
};

    function startGame() {
player1 = new Hero(document.getElementById("player1-name").value.trim());
    player2 = new Hero(document.getElementById("player2-name").value.trim());
    document.getElementById("player1-title").innerHTML = player1.name;
    document.getElementById("player2-title").innerHTML = player2.name;
    document.getElementById("player1-health").innerHTML = "Health: " + player1.health;
    document.getElementById("player2-health").innerHTML = "Health: " + player2.health;
    document.getElementById("player-input").style.display = "none";
 if (!document.getElementById('player1-weapon').value) document.getElementById('player1-weapon').value = 'air';
        if (!document.getElementById('player2-weapon').value) document.getElementById('player2-weapon').value = 'air';
        messageLog(`The battle begins between ${player1.name} and ${player2.name}!`);
    }
    
function messageLog(msg) {
    const gamelog = document.getElementById("game-log");
    gamelog.innerHTML += `<p>${msg}</p>`;
    gamelog.scrollTop = gamelog.scrollHeight;
}

  function selectWeapon(player, weapon, imgElem) { 
            var inputId = 'player' + player + '-weapon';
         var hidden = document.getElementById(inputId); if (!hidden) return; hidden.value = weapon; // highlight selection
          var container = document.getElementById('player' + player + '-weapon-choices');
          if (!container) return;
           var imgs = container.getElementsByClassName('weapon-img'); 
          for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove('weapon-selected'); 
            }
          imgElem.classList.add('weapon-selected');
           var playerName = (player === 1 ? (player1 && player1.name) : (player2 && player2.name)) || document.getElementById('player' + player + '-name').value || ('Player ' + player);
           var phrase = imgElem && imgElem.title ? imgElem.title : ('Brilyante ng ' + weapon);
           messageLog(playerName + ' chose ' + phrase + ' (' + weapon + ')'); 
            }


