import { Component } from '@angular/core';
import { Chart, registerables} from 'chart.js'
import { UserService } from 'src/app/components/services/user.service';

Chart.register(...registerables)

@Component({
  selector: 'app-overviews',
  templateUrl: './overviews.component.html',
  styleUrls: ['./overviews.component.css']
})
export class OverviewsComponent {

  constructor(private userservice:UserService){
  }



  
  infomonth = [
    {
      month12 : '',
      month11 :'',
      month10 : '',
      month9 :'',
      month8 :'',
      month7 : '',
       month6: '',
      month5:'',
      month4 : '',
      month3 : '',
      month2 :'',
      month1: '',

    }
  ] 

  infodata = []=[

    {
      month12 : '',
      month11 :'',
      month10 : '',
      month9 :'',
      month8 :'',
      month7 : '',
       month6: '',
      month5:'',
      month4 : '',
      month3 : '',
      month2 :'',
      month1: '',
    }
    
  ]; 

  static=[]=[
    {
      maxTransfer:'',
      minTransfer:0,
      Sold:'',
    }
  ];

  // infoUser = [
  //   {
  //     maxTransfer: '',
  //     minTransfer:0,
  //     Sold: '',
  //   }
  // ]

  // ngAfterViewInit(): void {



  //   this.RenderChart();



  // }


  ngOnInit(): void {


    this.userservice.staticsuser(sessionStorage.getItem('id')).subscribe({

      next:(res)=>{

        this.static[0].maxTransfer=res.highestrqnsfer;
        this.static[0].minTransfer= res.lowestTransfer;
        this.static[0].Sold=res.sold;

        this.RenderChart();

      } ,
      error:(err)=>{
        console.log(err);

      }

    })
    
  
  
  

    this.userservice.alltransfer(sessionStorage.getItem('id')).subscribe({


      next:(res)=>{



      
        console.log(res)
        
        this.infomonth[0].month12=res[0].month,
        this.infomonth[0].month11=res[1].month,
         this.infomonth[0].month10=res[2].month,
         this.infomonth[0].month9=res[3].month,
        this.infomonth[0].month8=res[4].month,
        this.infomonth[0].month7=res[5].month,
        this.infomonth[0].month6=res[6].month,
        this.infomonth[0].month5=res[7].month,
        this.infomonth[0].month4=res[8].month,
        this.infomonth[0].month3=res[9].month,
        this.infomonth[0].month2=res[10].month,
        this.infomonth[0].month1=res[11].month,



        this.infodata[0].month12=res[0].totalAmount,
        this.infodata[0].month11=res[1].totalAmount,
         this.infodata[0].month10=res[2].totalAmount,
         this.infodata[0].month9=res[3].totalAmount,
        this.infodata[0].month8=res[4].totalAmount,
        this.infodata[0].month7=res[5].totalAmount,
        this.infodata[0].month6=res[6].totalAmount,
        this.infodata[0].month5=res[7].totalAmount,
        this.infodata[0].month4=res[8].totalAmount,
        this.infodata[0].month3=res[9].totalAmount,
        this.infodata[0].month2=res[10].totalAmount,
        this.infodata[0].month1=res[11].totalAmount,


        // this.infomonth[0].month4=res[12].month,


        console.log( this.infodata[0].month12)
        console.log(this.infomonth[0].month12)
        console.log( this.infodata[0].month10)
        console.log(this.infomonth[0].month10)



        this.RenderChart();

      }, 
      error:(err)=>{
        console.log(err);

      }

    })

    




  
  
  
  
  }


  RenderChart(){
    // const chartData = this.infodata.map(data => data.month12); // Adjust this based on your data structure

    console.log(":::::::::::::::::")

    console.log(this.infodata)
    console.log(this.infomonth)
    console.log(":::::::::::::::::")


    new Chart('Chart-user', {
      type: 'bar',
      data: {
        labels: [
          this.infomonth[0].month12,this.infomonth[0].month11,
          this.infomonth[0].month10,this.infomonth[0].month9,
          this.infomonth[0].month8,this.infomonth[0].month7,
          this.infomonth[0].month6,this.infomonth[0].month5,
          this.infomonth[0].month4,this.infomonth[0].month3,
          this.infomonth[0].month2,this.infomonth[0].month1,
        ],
        datasets: [{
          label: '# of transactions',

          data:[
            this.infodata[0].month12,this.infodata[0].month11, 
            this.infodata[0].month10,this.infodata[0].month9, 
            this.infodata[0].month8,this.infodata[0].month7, 
            this.infodata[0].month6,this.infodata[0].month5, 
            this.infodata[0].month4,this.infodata[0].month3, 
            this.infodata[0].month2,this.infodata[0].month1, 
        ] ,
          borderWidth: 1,backgroundColor: 'rgba(54, 162, 235, 0.2)', // Set to blue color
          borderColor: 'rgba(54, 162, 235, 1)', // Set border color
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
 }




}