<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SendTrigerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'required|email|max:191',
            'company_id' => 'required',
            'donor_name' => 'required',
            'target_name' => 'required',
            'sum' => 'required',
            'org_name' => 'required',
            'secret' => 'required',
        ];
    }
}
