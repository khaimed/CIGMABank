import { Component , OnInit} from '@angular/core';
import { Chart, registerables} from 'chart.js'
import { UserService } from 'src/app/components/services/user.service';

Chart.register(...registerables)

@Component({
  selector: 'app-overviews',
  templateUrl: './overviews.component.html',
  styleUrls: ['./overviews.component.css']
})
export class OverviewsComponent implements OnInit {
  
  
  infoAdmin = {
      usersActive: '',
      usersNoactive: '',
      totalUsers: '',
      totalMoney: ''
    
  }
    
  infomonth = [
    {
      month12 : 'sdd',
      month11 :'sdd',
      month10 : 'sdsd',
      month9 :'sdds',
      month8 :'ssdd',
      month7 : 'sqd',
       month6: 'qsdqsd',
      month5:'qsdqsd',
      month4 : 'qsdqsd',
      month3 : 'qdqd',
      month2 :'sqdqsd',
      month1: 'sdqd',

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

    


  

  constructor(private userervice:UserService){}
  ngOnInit(): void {

    
    this.userervice.adminstatics().subscribe({

      next:(res)=>{
        console.log(res);

        this.infoAdmin.usersActive=res.acctiveuser;
        this.infoAdmin.usersNoactive=res.unactiveuser;
        this.infoAdmin.totalUsers=res.totaluser;
        this.infoAdmin.totalMoney=res.totalsold

        console.log(this.infoAdmin)

      }, 
      error:(err)=>{

      }

    })

    this.userervice.usercountstatics().subscribe({


      next:(res)=>{
        console.log(res);

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


        this.infodata[0].month12=res[0].totalUsers,
        this.infodata[0].month11=res[1].totalUsers,
         this.infodata[0].month10=res[2].totalUsers,
         this.infodata[0].month9=res[3].totalUsers,
        this.infodata[0].month8=res[4].totalUsers,
        this.infodata[0].month7=res[5].totalUsers,
        this.infodata[0].month6=res[6].totalUsers,
        this.infodata[0].month5=res[7].totalUsers,
        this.infodata[0].month4=res[8].totalUsers,
        this.infodata[0].month3=res[9].totalUsers,
        this.infodata[0].month2=res[10].totalUsers,
        this.infodata[0].month1=res[11].totalUsers

        this.RenderChart()



      }, 
      error:(err)=>{

      }

    })


  }



  RenderChart(){


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
          label: '#  Utilisateurs ',

          data:[
            this.infodata[0].month12,this.infodata[0].month11, 
            this.infodata[0].month10,this.infodata[0].month9, 
            this.infodata[0].month8,this.infodata[0].month7, 
            this.infodata[0].month6,this.infodata[0].month5, 
            this.infodata[0].month4,this.infodata[0].month3, 
            this.infodata[0].month2,this.infodata[0].month1, 
        ] ,
          borderWidth: 1,backgroundColor: 'rgba(54, 162, 235, 0.2)', 
          borderColor: 'rgba(54, 162, 235, 1)', 
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
