import ContactInfo from "./ContactInfo.jsx"

export default function BusinessCard({ name, title, email, phone, profileImage, tagline }) {
    return (
        <div className="card-container">
            <ContactInfo 
                name={name}
                email= {email} 
                phone= {phone} 
                title= {title} 
            />
            <img src={profileImage} alt="Profile Image" className="profile-image" />
            <div className="tagline">&quot;{tagline}&quot;</div>
        </div>
    )
}