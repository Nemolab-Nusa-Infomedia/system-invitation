<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sampul extends Model
{
    protected $table = 'sampul';   
    protected $fillable =  ['foto_sampul','nama_panggilan_mempelai','ucapan_pembuka'];

}
                                                                              