import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public service: ProductService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      name: "",
      href: "",
      description: "",
      prise: 0
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({},form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection("product").add(data);
    } else {
      this.firestore.doc("product/" + form.value.id).update(data);
    }
    
    this.resetForm(form);
    this.toastr.success("Feltöltés sikeres!")
  }

}
