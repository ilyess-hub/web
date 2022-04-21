import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetails = null as any;
  studentToUpdate = {
    rollNumber:"",
    name:"",
    address:"",
    fees:""
  }

  constructor(private studentService: StudentService, private router : Router) {
    this.getStudentsDetails();
  }

  ngOnInit(): void {
      
  }

  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentsDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  

  }

  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(studuent: any){
    this.studentToUpdate = studuent;
  }

  updateStudent(){
    this.studentService.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
