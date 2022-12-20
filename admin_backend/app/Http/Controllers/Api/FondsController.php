<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\Fond;
use Illuminate\Http\Request;

class FondsController extends Controller
{
    /**
     * @OA\Get(
     *   path="/api/fonds",
     *   tags={"Fonds"},
     *   @OA\Response(response="200",description="Search fond by params",),
     *   @OA\Parameter(name="org_name",description="Fond name",in="path",required=false,@OA\Schema(type="string")),
     * ),
     */
    public function index(Request $request)
    {

        $query = Fond::latest();

        if (!empty($value = $request->get('org_name'))) {
            $query->where('org_name', 'like', '%' . $value . '%');
        }
        if (!empty($value = $request->get('email '))) {
            $query->where('email ', 'like', '%' . $value . '%');
        }
        return $query->paginate(15);

    }

    /**
     * @OA\Post(
     *   path="/api/fonds",
     *   tags={"Fonds"},
     *   @OA\Response(response="201",description="Search products by params",),
     *   @OA\Parameter(name="org_name",description="Fond name",in="path",required=true,@OA\Schema(type="string")),
     * ),
     */

    public function store(Request $request)
    {

        $fond = Fond::create($request->all());

        return response()->json($fond, 201);
    }


    /**
     * @OA\Get(
     *   path="/api/fonds/{id}",
     *   tags={"Fonds"},
     *   @OA\Response(response="200",description="Game id",),
     * ),
     */
    public function show($id)
    {
        $fond = Fond::findOrFail($id);

        return $fond;
    }

    /**
     * @OA\Put(
     *   path="/api/fonds",
     *   tags={"Fonds"},
     *   @OA\Response(response="201",description="Search products by params",),
     *   @OA\Parameter(name="org_name",description="Fond name",in="path",required=true,@OA\Schema(type="string")),
     * ),
     */
    public function update(Request $request, $id)
    {

        $fond = Fond::findOrFail($id);
        $fond->update($request->all());

        return response()->json($fond, 200);
    }


    /**
     * @OA\Delete(
     *   path="/api/fonds/{id}",
     *   tags={"Fonds"},
     *   @OA\Response(response="204",description="Delete fond",),
     *   @OA\Parameter(name="id",description="Game id",in="path",required=true,@OA\Schema(type="integer")),
     * ),
     */
    public function destroy($id)
    {
        Fond::destroy($id);

        return response()->json(null, 204);
    }
}
