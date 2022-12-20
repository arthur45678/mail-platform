<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\AccountingMessageSending;
use Illuminate\Http\Request;

class AccountMessageController extends Controller
{
    /**
     * @OA\Get(
     *   path="/api/genres",
     *   tags={"Genre"},
     *   @OA\Response(response="200",description="Search genres by params",),
     *   @OA\Parameter(name="name",description="Genre name",in="path",required=false,@OA\Schema(type="string")),
     * ),
     */
    public function index(Request $request)
    {


        $orderColumn = $request->input('order_column', 'id');
        $orderDirection = $request->input('order_direction', 'desc');
        if (!in_array($orderColumn, ['id', 'title'])) {
            $orderColumn = 'id';
        }
        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }

        $filterable = ['id', 'date',
            'company_id',
            'trigger_id',
            'target_id',
            'status',
            'sent',
            'read',
            'clicked',
            'del_error',
            'blocked',
            'spam',
            'unsub'
        ];
        $filterableValues = array_filter($request->only($filterable));


        $posts = AccountingMessageSending::when(count($filterableValues), function($query) use ($filterableValues) {
            foreach ($filterableValues as $column => $value) {
                $query->where($column, 'like', '%' . $value . '%');
            }
        })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10);

        return response()->json($posts);

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $account = AccountingMessageSending::create($request->all());

        return response()->json($account, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $account = AccountingMessageSending::findOrFail($id);

        return $account;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $account = AccountingMessageSending::findOrFail($id);
        $account->update($request->all());

        return response()->json($account, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        AccountingMessageSending::destroy($id);

        return response()->json(null, 204);
    }
}
