import React, { Fragment, useState } from 'react';
import faker from "faker/locale/en_IND";


 const CreateEmployees = () => {
    let [employee,setEmployee]=useState({
        emp_photo:faker.random.image(),
        emp_name:"",
        emp_education:"",
        emp_designation:"",
    })
    return (
        <Fragment>
            <section id="employeeBlock">
                <article>
                    <h3>Create Employee</h3>
                    <form>
                        <div>
                            <label htmlFor="emp_name">Employee Name</label>
                            <input type="text" name="emp_name" placeholder="Enter employee name" ></input>
                        </div>
                        <div>
                        <label htmlFor="emp_education">Employee Education</label>
                        <input type="text" name="emp_name" placeholder="Enter employee education" ></input>
                        </div>
                        <div>
                        <label htmlFor="emp_designation">Employee Designation</label>
                        <input type="text" name="emp_name" placeholder="Enter employee designation" ></input>
                        </div>
                        <div>
                            <button>Create Employee</button>
                        </div>
                    </form>
                </article>
            </section>
        </Fragment>
    )
}
export default CreateEmployees;
