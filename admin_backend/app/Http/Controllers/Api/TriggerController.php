<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTriggerRequest;
use App\Http\Requests\UpdateTriggerRequest;
use Illuminate\Http\Request;
use App\Models\Trigger;

class TriggerController extends Controller
{

    /**
     * @OA\Get(
     *   path="/api/triggers",
     *   tags={"triggers"},
     *   @OA\Response(response="200",description="Search trigger by params",),
     *   @OA\Parameter(name="identificator",description="trigger Идентификатор - текстовое название триггера на латиннице для удобного обращения через апи, например",in="path",required=false,@OA\Schema(type="string")),
     *   @OA\Parameter(name="title",description="Тема письма",in="path",required=false,@OA\Schema(type="string")),
     *   @OA\Parameter(name="body",description="Текст письма",in="path",required=false,@OA\Schema(type="text")),
     *   @OA\Parameter(name="trigger_type",description="Сервисный, Промо	",in="path",required=false,@OA\Schema(type="string")),
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

        $filterable = ['id', 'title', 'content'];
        $filterableValues = array_filter($request->only($filterable));

        $posts = Trigger::when(count($filterableValues), function($query) use ($filterableValues) {
                foreach ($filterableValues as $column => $value) {
                    $query->where($column, 'like', '%' . $value . '%');
                }
            })
            ->when($request->filled('global'), function($query) use ($filterable, $request) {
                foreach ($filterable as $column) {
                    if ($column == $filterable[0]) {
                        $query->where($column, 'like', '%' . $request->global . '%');
                    } else {
                        $query->orWhere($column, 'like', '%' . $request->global . '%');
                    }
                }
            })
            ->when($request->filled('category_id'), function($query) use ($request) {
                $query->where('category_id', $request->category_id);
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10);

        return response()->json($posts);


    }


    /**
     * @OA\Post(
     *   path="/api/triggers",
     *   tags={"triggers"},
     *   @OA\Response(response="200",description="Store trigger by params",),
     *   @OA\Parameter(name="identificator",description="trigger Идентификатор - текстовое название триггера на латиннице для удобного обращения через апи, например",in="path",required=false,@OA\Schema(type="string")),
     *   @OA\Parameter(name="title",description="Тема письма",in="path",required=false,@OA\Schema(type="string")),
     *   @OA\Parameter(name="body",description="Текст письма",in="path",required=false,@OA\Schema(type="text")),
     *   @OA\Parameter(name="trigger_type",description="Сервисный, Промо",in="path",required=false,@OA\Schema(type="string")),
     * ),
     */

    public function store(/*CreateTriggerRequest*/ Request $request)
    {



        $item = Trigger::create($request->only('identificator','title','body','trigger_type'));

        return response()->json($item, 201);
    }

    /**
     * @OA\Get(
     *   path="/api/triggers/{id}",
     *   tags={"triggers"},
     *   @OA\Response(response="200",description="trigger id",),
     * ),
     */
    public function show($id)
    {
        $item = Trigger::find($id);
        if(!$item){
            return response()->json(['message' => 'Не найден']);
        }
        return $item;
    }
    /**
     * @OA\Put(
     *   path="/api/triggers",
     *   tags={"triggers"},
     *   @OA\Response(response="201",description="Search products by params",),
     *   @OA\Parameter(name="identificator",description="trigger Идентификатор - текстовое название триггера на латиннице для удобного обращения через апи, например",in="path",required=false,@OA\Schema(type="string")),
     *   @OA\Parameter(name="title",description="Тема письма",in="path",required=false,@OA\Schema(type="string")),
     *   @OA\Parameter(name="body",description="Текст письма",in="path",required=false,@OA\Schema(type="text")),
     *   @OA\Parameter(name="trigger_type",description="Сервисный, Промо	",in="path",required=false,@OA\Schema(type="string")),
     * ),
     */

    public function edit($id)
    {
        $item = Trigger::show($id);
        return $item;
    }


    public function update(UpdateTriggerRequest $request, $id)
    {
        $item = Trigger::find($id);
        if(!$item){
            return response()->json(['message' => 'Not found'],404);
        }
        $item->update($request->all());

        return response()->json($item, 200);
    }

    /**
     * @OA\Delete(
     *   path="/api/triggers/{id}",
     *   tags={"triggers"},
     *   @OA\Response(response="204",description="Delete trigger",),
     *   @OA\Parameter(name="id",description="trigger id",in="path",required=true,@OA\Schema(type="integer")),
     * ),
     */
    public function destroy($id)
    {
        Trigger::destroy($id);
        return response()->json(null, 204);
    }
}
