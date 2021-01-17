create database Hospital;
use Hospital
Create Table Doctors(
	DoctorId VARCHAR(10) primary key ,
    DoctorName VARCHAR(200) Not Null,
    Degree VARCHAR(100) Not Null,
    Specialization VARCHAR(100) Not Null,
    )   

	Create Table Patients(
    PatientId varchar(10) primary key,
    PatientName VARCHAR(200) Not Null,
    Address VARCHAR(300) Not Null,
    Age int Not Null,
    Gender Varchar(10) Not Null,
    CONSTRAINT patientId_unique Unique(PatientId)
 )

 Create table DoctorPatientOPD(
    RegistrationId  varchar(100)  not null,
    PatientId varchar(10) not null,
    DoctorId varchar(10) not null,
    Fees int not null,
    Constraint fk_patient_row_id FOREIGN KEY (Patientid)
    References Patients (PatientId),
    Constraint fk_doctor_row_id Foreign Key (DoctorId)
    References Doctors (DoctorId),
    Constraint pk_registretion_unique_id Primary Key (RegistrationId)
)
insert into DoctorPatientIPD values
(1,2,1,2),
(2,3,4,1),
(3,1,4,4)
select * from DoctorPatientIPD


Create Table RoomsMaster(
    RoomId varchar (10) Primary Key ,
    RoomType Varchar(100) not null,
    BedsCount int not null  
)
Create table DoctorPatientIPD(
	
    RegistrationId varchar(100) not null,
    PatientId varchar(10) not null,
    DoctorId varchar(10) not null,
    RoomId varchar(10)not null,
    Constraint fk_patient_rowroom_id FOREIGN KEY (PatientId)
    References Patients (PatientId),
    Constraint fk_doctor_rowroom_id Foreign Key (DoctorId)
    References Doctors (DoctorId),
	Constraint fk_room_unique_id Foreign Key (RoomId)
    References RoomsMaster (RoomId),
    Constraint pk_registration_unique_id Primary Key (RegistrationId)
)


insert into Doctors Values
 ( 1, 'abc', 'MD', 'Diabetic'),
 ( 2, 'subodh', 'MD', 'Lungs'),
 ( 3, 'kumar', 'MDS', 'Orthodontist'),
 ( 4, 'anand', 'mbbs', 'heart')


 select * from Doctors

 insert into patients Values
 ( 1, 'Ajay', 'Dehradun',20, 'M'),
 ( 2, 'Jayshree', 'hyderabad',40, 'F'),
 ( 3, 'Namita','Pune',32, 'F')

 select * from roomsmaster

 insert into roomsmaster values
 (1,'Double',2),
 (2,'Trible',3),
 (3,'Triple',3),
 (4,'Hall',6)


 --query 1
 select * from DoctorPatientOPD
 insert into DoctorPatientIPD values
(1,2,1,2),
(2,3,4,1),
(3,1,4,4)
insert into DoctorPatientIPD values
(1,1,3,1000),
(2,2,1,100200),
(3,3,4,560000),
(4,1,4,100000)

--query 2
 select distinct doctorpatientipd.doctorid,patients.PatientName from Patients 
 left join doctorpatientipd on Patients.PatientId=doctorpatientipd.PatientId
 
 select distinct doctorpatientopd.doctorid,patients.PatientName from Patients 
 left join doctorpatientopd on Patients.PatientId=doctorpatientopd.PatientId
 
--query 3
 select * from DoctorPatientIPD
 select * from doctors

 select distinct count(doctorpatientipd.doctorid) as number_of_heart_patients from DoctorPatientIPD
 full join  Doctors on DoctorPatientIPD.DoctorId=doctors.DoctorId
 where doctors.Specialization='heart'
