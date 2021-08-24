<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Name"/>
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Phone</label>
            <input type="text" class="form-control" v-model="phone" placeholder="Phone"/>
        </div>

        <div class="form-group">
            <label>City</label>
            <input type="text" class="form-control" v-model="city" placeholder="City"/>
        </div>

        <div class="form-group">
            <label>Gender</label>
            <input type="text" class="form-control" v-model="gender" placeholder="Gender"/>
        </div>

        <div class="form-group">
            <label>Status</label>
            <input type="text" class="form-control" v-model="status" placeholder="Status"/>
        </div>
        <div class="form-group">
            <label>Department</label>
            <input type="text" class="form-control" v-model="department" placeholder="Department"/>
        </div>
        <div class="form-group">
            <label>Started Date</label>
            <input type="date" class="form-control" v-model="started_date" placeholder="Started Date"/>
        </div>
        <div class="form-group">
            <label>Manager Id</label>
            <input type="number" class="form-control" v-model="manager_id" placeholder="Manager Id"/>
        </div>
        <div class="form-group">
            <label>Position</label>
            <input type="text" class="form-control" v-model="position" placeholder="Position"/>
        </div>
        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'Register_employee',
        data(){
            return {
                name: '',
                email: '',
                phone: '',
                city: '',
                gender: '',
                status: '',
                department: '',
                started_date: '',
                manager_id: '',
                position: '',
            }
        },
        methods: {
            handleSubmit(){
                const data = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    city: this.city,
                    gender: this.gender,
                    status: this.status,
                    department: this.department,
                    started_date: this.started_date,
                    manager_id: this.manager_id,
                    position: this.position,
                };
                
                axios.post("http://localhost:8080/employees", data)
                    .then(
                        res => {
                            console.log(res)
                        }
                    ).catch(

                        err => {
                            console.log(err)
                        }
                    )
            }
        }
    }
</script>