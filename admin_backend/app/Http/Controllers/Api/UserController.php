<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    /**
     * @OA\Get(path="/users",
     *   security={{"bearerAuth":{}}},
     *   tags={"Users"},
     *   @OA\Response(response="200",
     *     description="User Collection",
     *   ),
     *   @OA\Parameter(
     *     name="page",
     *     description="Pagination page",
     *     in="query",
     *     @OA\Schema(
     *        type="integer"
     *     )
     *   )
     * )
     */
    public function index(Request $request)
    {

        $users = User::paginate();

        return response()->json($users);
    }

    /**
     * @OA\Get(path="/users/{id}",
     *   security={{"bearerAuth":{}}},
     *   tags={"Users"},
     *   @OA\Response(response="200",
     *     description="User",
     *   ),
     *   @OA\Parameter(
     *     name="id",
     *     description="User ID",
     *     in="path",
     *     required=true,
     *     @OA\Schema(
     *        type="integer"
     *     )
     *   )
     * )
     */
    public function show($id)
    {

        $user = User::find($id);

        return response()->json($user);
    }

    /**
     * @OA\Post(
     *   path="/users",
     *   security={{"bearerAuth":{}}},
     *   tags={"Users"},
     *   @OA\Response(response="201",
     *     description="User Create",
     *   ),
     *   @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(ref="#/components/schemas/UserCreateRequest")
     *   )
     * )
     */
    public function store(Request $request)
    {

        $user = User::create(
            $request->only('first_name', 'last_name', 'email', 'role_id')
            + ['password' => Hash::make(1234)]
        );

      //  return response(new UserResource($user), Response::HTTP_CREATED);
        return response()->json($user, Response::HTTP_CREATED);
    }

    /**
     * @OA\Put(
     *   path="/users/{id}",
     *   security={{"bearerAuth":{}}},
     *   tags={"Users"},
     *   @OA\Response(response="202",
     *     description="User Update",
     *   ),
     *   @OA\Parameter(
     *     name="id",
     *     description="User ID",
     *     in="path",
     *     required=true,
     *     @OA\Schema(
     *        type="integer"
     *     )
     *   ),
     *   @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(ref="#/components/schemas/UserUpdateRequest")
     *   )
     * )
     */
    public function update(Request $request, $id)
    {

        $user = User::find($id);

        $user->update($request->only('first_name', 'last_name', 'email', 'role_id'));

     //   return response(new UserResource($user), Response::HTTP_ACCEPTED);
        return response()->json($user, Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Delete(path="/users/{id}",
     *   security={{"bearerAuth":{}}},
     *   tags={"Users"},
     *   @OA\Response(response="204",
     *     description="User Delete",
     *   ),
     *   @OA\Parameter(
     *     name="id",
     *     description="User ID",
     *     in="path",
     *     required=true,
     *     @OA\Schema(
     *        type="integer"
     *     )
     *   )
     * )
     */
    public function destroy($id)
    {

        User::destroy($id);

        return response(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * @OA\Get(path="/user",
     *   security={{"bearerAuth":{}}},
     *   tags={"Profile"},
     *   @OA\Response(response="200",
     *     description="Authenticated User",
     *   )
     * )
     */
    public function user()
    {
        $user = Auth::user();

        return response()->json($user);
    }

    /**
     * @OA\Put(
     *   path="/users/info",
     *   security={{"bearerAuth":{}}},
     *   tags={"Profile"},
     *   @OA\Response(response="202",
     *     description="User Info Update",
     *   ),
     *   @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(ref="#/components/schemas/UpdateInfoRequest")
     *   )
     * )
     */
    public function updateInfo(UpdateInfoRequest $request)
    {
        $user = Auth::user();

        $user->update($request->only('first_name', 'last_name', 'email'));

      //  return response(new UserResource($user), Response::HTTP_ACCEPTED);
        return response()->json($user, Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Put(
     *   path="/users/password",
     *   security={{"bearerAuth":{}}},
     *   tags={"Profile"},
     *   @OA\Response(response="202",
     *     description="User Password Update",
     *   ),
     *   @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(ref="#/components/schemas/UpdatePasswordRequest")
     *   )
     * )
     */
    public function updatePassword(Request $request)
    {
        $user = \Auth::user();

        $user->update([
            'password' => Hash::make($request->input('password')),
        ]);

      //  return response(new UserResource($user), Response::HTTP_ACCEPTED);
        return response()->json($user,Response::HTTP_ACCEPTED);
    }
}
