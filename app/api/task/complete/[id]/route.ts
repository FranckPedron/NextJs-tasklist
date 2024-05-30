import Task from "@models/tasks";
import {connectToDB} from "@utils/database";

import {NextResponse} from 'next/server'
import {IDeleteTaskRequestParam} from "@types";

export const PATCH = async (requet: Request, {params}: IDeleteTaskRequestParam) => {
    try {
        await connectToDB();
        const existingtask = await Task.findById(params.id)

        if (!existingtask) {
            return NextResponse.json("Task not found", {status: 404});
        }
        existingtask.completed = true;
        await existingtask.save();

        return NextResponse.json("Task successfully completed", {status: 200});
    }
    catch (e) {
        return NextResponse.json("Error completing task", {status: 500});
    }
}
