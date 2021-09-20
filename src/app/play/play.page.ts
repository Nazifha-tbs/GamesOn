import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  rows: any[];
  zero: any;
  cross: any;
  name: any;
  player1: boolean;
  player2: boolean;
  counter: number;
  player1Score : number;
  player2Score: number;
  constructor(private alertCtrl: AlertController) {
    this.counter = 0;
    this.player1 = true;
    this.player2 = false;
   this.player1Score = 0;
    this.player2Score = 0;
  }

  ngOnInit() {
    this.getData();
  }

  setSign(index) {
    if (this.counter <= 8) {
      if (this.player1 == true) {
        for (let i = 0; i < this.rows.length; i++) {
          if (i == index) {
            if (this.rows[i].name == undefined || this.rows[i].name == '') {
              this.rows[i].name = 'radio-button-off';
              this.counter++;
            } else {
              this.rows[i].name = '';
            }
          }
        }
      }


      if (this.player2 == true) {
        for (let i = 0; i < this.rows.length; i++) {
          if (i == index) {
            if (this.rows[i].name == undefined || this.rows[i].name == '') {
              this.rows[i].name = 'close';
              this.counter++;
            } else {
              this.rows[i].name = '';
            }
          }
        }
      }

      this.player2 = !this.player2;
      this.player1 = !this.player1;

      if (this.counter >= 5) {
        if (this.rows[0].name == 'close' && this.rows[2].name == 'close' && this.rows[1].name == 'close' || this.rows[0].name == 'radio-button-off' && this.rows[2].name == 'radio-button-off' && this.rows[1].name == 'radio-button-off') {
          this.showAlert(this.rows[0].name);
          console.log('---------- 1');
        }
        else if (this.rows[3].name == 'close' && this.rows[4].name == 'close' && this.rows[5].name == 'close' || this.rows[3].name == 'radio-button-off' && this.rows[4].name == 'radio-button-off' && this.rows[5].name == 'radio-button-off') {
          
          this.showAlert(this.rows[3].name);
          console.log('---------- 2');
        }
        else if (this.rows[6].name == 'close' && this.rows[7].name == 'close' && this.rows[8].name == 'close' || this.rows[6].name == 'radio-button-off' && this.rows[7].name == 'radio-button-off' && this.rows[8].name == 'radio-button-off') {
          this.showAlert(this.rows[6].name);
          console.log('---------- 3');
        }
        else if (this.rows[0].name == 'close' && this.rows[4].name == 'close' && this.rows[8].name == 'close' || this.rows[0].name == 'radio-button-off' && this.rows[4].name == 'radio-button-off' && this.rows[8].name == 'radio-button-off') {
          this.showAlert(this.rows[0].name);
          console.log('\\ 048');
        }
        else if (this.rows[2].name == 'close' && this.rows[4].name == 'close' && this.rows[6].name == 'close' || this.rows[2].name == 'radio-button-off' && this.rows[4].name == 'radio-button-off' && this.rows[6].name == 'radio-button-off') {
          this.showAlert(this.rows[2].name);
          console.log('// 246');
        }
        else if (this.rows[0].name == 'close' && this.rows[3].name == 'close' && this.rows[6].name == 'close' || this.rows[0].name == 'radio-button-off' && this.rows[3].name == 'radio-button-off' && this.rows[6].name == 'radio-button-off') {
          this.showAlert(this.rows[0].name);
          console.log('| left');
        }
        else if (this.rows[2].name == 'close' && this.rows[5].name == 'close' && this.rows[8].name == 'close' || this.rows[2].name == 'radio-button-off' && this.rows[5].name == 'radio-button-off' && this.rows[8].name == 'radio-button-off') {
          this.showAlert(this.rows[2].name);
          console.log(' right |');
        }  else if (this.rows[1].name == 'close' && this.rows[4].name == 'close' && this.rows[7].name == 'close' || this.rows[1].name == 'radio-button-off' && this.rows[4].name == 'radio-button-off' && this.rows[7].name == 'radio-button-off') {
          this.showAlert(this.rows[1].name);
          console.log(' middle |');
        }
        else {
          console.log('Do nothing');
        }

      }
      console.log(this.counter);

    }
    if(this.counter == 9)
    {
      this.getData();
    }
  }

  async showAlert(sign) {
    
    let msg ;
    if(sign == 'close')
    {
      msg ='Winner is player 2';
      this.player2Score++;

    } else{
      msg = 'Winner is player 1';
      this.player1Score++;
    }
    let alert = this.alertCtrl.create({
      mode: 'ios',
      header: 'Game Over',
      message: msg,
      buttons: [{
        text: 'close',
        role: 'cancel',
        handler : () =>{
          this.getData();
        }
      }]
    });
    (await alert).present();
  }
  getData() {
    this.rows = [{

      col: '',
      name: ''
    },
    {
      col: '',
      name: ''
    },
    {
      col: '',
      name: ''

    },
    {
      col: '',
      name: ''
    },
    {
      col: '',
      name: ''
    },
    {
      col: '',
      name: ''
    },
    {
      col: '',
      name: ''
    },
    {
      col: '',
      name: ''
    },
    {
      col: '',
      name: ''

    }]
    this.counter = 0;
    this.player1 = true;
    this.player2 = false;
  }
}
