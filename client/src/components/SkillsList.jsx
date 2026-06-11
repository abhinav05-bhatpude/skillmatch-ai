function SkillsList({

skills

}) {

return (

<div>

<h2
className="
text-2xl
font-bold
mb-4
"
>

Detected Skills

</h2>

<div
className="
flex
flex-wrap
gap-3
"
>

{
skills.map(
(skill)=>(
<span

key={skill}

className="

bg-green-100

px-4

py-2

rounded-full

"

>

{skill}

</span>
)
)
}

</div>

</div>

);

}

export default SkillsList;