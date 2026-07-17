import React from "react";


const sections = [

{
title:"Acceptance Of Terms",
text:
"By accessing or using our website, applications or services, you agree to be bound by these Terms & Conditions."
},

{
title:"Use Of Services",
text:
"You agree to use our services only for lawful purposes and avoid any activity that may harm our platform or other users."
},

{
title:"Intellectual Property",
text:
"All content, designs, logos, graphics and software are owned by us and protected by applicable intellectual property laws."
},

{
title:"Account Responsibility",
text:
"Users are responsible for maintaining the confidentiality of their account information and activities."
},

{
title:"Limitation Of Liability",
text:
"We are not responsible for losses caused by misuse of our services or circumstances beyond our control."
},

{
title:"Changes To Terms",
text:
"We reserve the right to update these terms at any time. Updated terms will be published on this page."
}

];


function TermsContent(){

return(

<section className="bg-white px-6 py-20 sm:px-10 lg:px-16">


<div className="mx-auto flex max-w-4xl flex-col gap-6">


{
sections.map((section,index)=>(


<div
key={index}
className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:border-black hover:shadow-lg"
>


<h2 className="text-2xl font-bold text-black">
{section.title}
</h2>


<p className="mt-4 text-base leading-relaxed text-gray-600">
{section.text}
</p>


</div>


))

}


</div>


</section>

)

}


export default TermsContent;