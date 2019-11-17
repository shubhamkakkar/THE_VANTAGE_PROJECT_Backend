import QASchema from "../../../models/QA"

export default function addQAMutation({input}) {
    const QA = new QASchema({...input});
    return QA.save()
        .then(res => res)
        .catch(res => res)
}
