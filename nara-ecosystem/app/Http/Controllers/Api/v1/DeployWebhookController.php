<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeployWebhookController extends Controller
{
    /**
     * Handle incoming GitHub Push Webhook to automatically pull and clear cache
     */
    public function deploy(Request $request)
    {
        // Base working directory
        $baseDir = base_path();
        
        $output = [];
        $returnVar = 0;
        
        // Ensure git safe.directory is set for www-data and pull changes
        $command = "git config --global --add safe.directory '*' 2>&1 && git config --global --add safe.directory '{$baseDir}' 2>&1 && cd '{$baseDir}' && git pull origin main 2>&1 && php artisan view:clear 2>&1 && php artisan cache:clear 2>&1";
        
        exec($command, $output, $returnVar);
        
        Log::info('Auto-Deploy webhook executed', [
            'status' => $returnVar,
            'output' => $output
        ]);

        return response()->json([
            'status' => $returnVar === 0 ? 'success' : 'warning',
            'message' => 'NARA Ecosystem Auto-Deployment executed.',
            'output' => $output
        ]);
    }
}
