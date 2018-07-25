import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Yaris } from '../../models/yaris';

@IonicPage()
@Component({
  selector: 'page-gunluk-tahmin-ekle',
  templateUrl: 'gunluk-tahmin-ekle.html',
})
export class GunlukTahminEklePage {
  tahminForm:FormGroup;
  mode='Ekle';
  yaris:Yaris;
  index:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actionSheetCtrl:ActionSheetController,
    private alertCtrl:AlertController, private toastCtrl:ToastController) {
  }
  onSubmit()
  {
    const value=this.tahminForm.value;
    let tahminler=[];
    if(value.tahminler.length>0)
    {
      tahminler=value.tahminler.map(name=>{
        return {ayak:name,tahmini:1};
      })

    }
    if(this.mode=='Güncelle')
    {
      // this.recipeServices.updateRecipe(this.index,value.title,value.description,
      //   value.difficulty,ingredients);
    }else{
    // this.recipeServices.addRecipe(value.title,value.description,
    //   value.difficulty,ingredients);
    }
      this.tahminForm.reset();
      this.navCtrl.popToRoot();
  }
  ngOnInit()
  {
    this.mode=this.navParams.get('mode');
    if(this.mode=='Güncelle')
    {
      this.yaris=this.navParams.get('yaris');
      this.index=this.navParams.get('index');
    }

    this.initializeForm();
  }
  private initializeForm()
  {
    let bolgeAdi=null;
    let kosuAdi=null;
    let tarihi=null;
    let saati=null;
    let yarisAdi=null;
    let yarisDetayi=null;
    let tahminler=[];
    // if(this.mode=='Güncelle')
    // {
    //   title=this.recipe.title;
    //   description=this.recipe.description;
    //   difficulty=this.recipe.difficulty;
    //   for(let ingredient of this.recipe.ingredients)
    //   {
    //     ingredients.push(new FormControl(ingredient.name,Validators.required));
    //   }
    // } 
    this.tahminForm=new FormGroup({
      'bolgeAdi':new FormControl(bolgeAdi,Validators.required),
      'kosuAdi':new FormControl(kosuAdi,Validators.required),
      'tarihi':new FormControl(bolgeAdi,Validators.required),
      'saati':new FormControl(kosuAdi,Validators.required),
      'yarisAdi':new FormControl(bolgeAdi,Validators.required),
      'yarisDetayi':new FormControl(kosuAdi,Validators.required),
      'tahminler':new FormArray(tahminler)
    });
  }
  tahminleriEkle()
  {
    const actionSheet=this.actionSheetCtrl.create({
      title:'Ne Yapmak İstersin',
      buttons:[
        {
          text:'Tahmin Ekle',
          handler:()=>{
            this.yeniTahminEkleUyari().present();
          }
        },
        {
            text:'Tüm Tahminleri Sil?',
            role:'descructive',
            handler:()=>{
              const fArray:FormArray=<FormArray>this.tahminForm.get('tahminler');
              const len=fArray.length;
              if(len>0)
              {
                for(let i=len-1;i>=0;i--)
                {
                  fArray.removeAt(i);
                }
                const toast=this.toastCtrl.create({
                  message:'Tüm Tahminler Silindi?',
                  duration:1000,
                  position:'bottom'
  
                });
                toast.present();
              }
            }
        },
        {
          text:'İptal',
          role:'iptal'

        }
      ]
    });
    actionSheet.present();
  }
  private yeniTahminEkleUyari()
  {
   return this.alertCtrl.create({
      title:'Tahmin Ekle',
      inputs:[
        {
          name:'ayak',
          placeholder:'ayak no'
        },
        {
          name:'tahmini',
          placeholder:'tahmini'
        }
      ],
      buttons:[
        {
          text:'iptal',
          role:'cancel'
        },
        {
          text:'Ekle',
          handler:data=>{
            if(data.ayak.trim()=='' || data.ayak==null)
            {
              const toast=
              this.toastCtrl.create({
                message:'lütfen Doğru Bilgi Giriniz',
                duration:1000,
                position:'bottom'

              });
              toast.present();
              return;
            }
            (
              <FormArray>this.tahminForm.get('tahminler'))
            .push(new FormGroup({
              'ayak':new FormControl(data.ayak,Validators.required),
              'tahmini':new FormControl(data.tahmini,Validators.required)}));
            const toast=this.toastCtrl.create({
              message:'Yeni Tahmin Eklendi',
              duration:1000,
              position:'bottom'
            });
            toast.present();
          }
        }
      ]
    });
  }
  
}
