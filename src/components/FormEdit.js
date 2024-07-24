'use client';

import {addReview, removeReview} from "@/lib/actions";

export default function FormEdit({src:{id, read, memo}}){
    return (
        <form action={addReview}>
            <input type="hidden" name="id" defaultValue={id}/>
            <div className="mb-3">
                <label className="font-bold" htmlFor="read">読了日: </label>
                <input type="date" id="read" name="read"
                       className="block bg-gray-100 border-2 border-gray-600 rounded forcus:bg-white focus:outline-none focus:border-red-500"
                       defaultValue={read} />
            </div>
            <div className="mb-3">
                <label className="font-bold" htmlFor="memo">感想: </label>
                <textarea id="memo" name="memo" rows="3"
                       className="block bg-gray-100 border-2 border-gray-600 w-full rounded forcus:bg-white focus:outline-none focus:border-red-500"
                       defaultValue={memo} />
            </div>
            <button type="submit"
                    className="bg-blue-600 text-white rouded px-4 py-2 mr-2 hover:bg-blue-500"
                    formAction={addReview}>
                登録
            </button>
            <button type="submit"
                    className="bg-blue-600 text-white rouded px-4 py-2 hover:bg-red-500"
                    formAction={removeReview}>
                削除
            </button>
        </form>
    );
}