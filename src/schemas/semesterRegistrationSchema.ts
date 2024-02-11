import {z} from "zod";

export const semesterRegistrationSchema = z.object({
    academicSemester:z.string({required_error:'academic semester is required'}),
    status:z.enum(['UPCOMING','ONGOING','ENDED']),
    startDate:z.coerce.date(),
    endDate:z.coerce.date(),
    minCredit:z.string({required_error:'min credit is required'}),
    maxCredit:z.string({required_error:"max credit is required"})
})