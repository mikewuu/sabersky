<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class ItemsController extends Controller
{
    protected $items;

    public function __construct()
    {
        $this->middleware('auth');
        if ($user = Auth::user()) {
            $this->items = $user->company->items();
        }
    }

    public function all()
    {
//        $itemNames = Auth::user()->company->items()->unique('name')->pluck('name');
//        $items = $this->items;
        return view('items.all', compact('itemNames', 'items'));
    }

    public function apiAll()
    {
        return $this->items;
    }

    public function addPhoto(Request $request, Item $item)
    {
        if ($request->ajax()) {
            if(Gate::allows('edit', $item)) {
                $file = $request->file('item_photos')[0];
                $item->attachPhoto($file);
                return response()->json([
                    'status' => 'success',
                    'msg' => 'Added new photos to items.',
                ], 200);
            }
            return response()->json([
                'status' => 'error',
                'msg' => 'Item doesn\'t belong to you.',
            ], 402);
        } else {
            abort(403, 'Wrong way, go back!');
        }
    }

    public function single(Item $item)
    {

    }

    public function getName($name)
    {
        return $this->items->where('name', $name);
    }

}